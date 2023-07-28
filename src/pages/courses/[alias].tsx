import { Button, Htag, Ptag, Rating, Tag } from "../../../components/index";
import { withLayout } from "../../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { API } from "../../api";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';

const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory,
    });

  const paths =  menu.flatMap(item => item.pages.map(page => '/courses/' + page.alias));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  const { data: page } = await axios.get<TopPageModel>(
    API.topPage.byAlias + params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    API.product.find,
    {
      category: page.category,
      limit: 10,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

