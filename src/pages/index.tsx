
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from "../../components/index";
import { withLayout } from '../../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { API } from '../api';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Текст h1</Htag>
      <Button appearance="clear"> Button clear</Button>
      <Button appearance="primary" arrow="right">
        Button primary
      </Button>
      <Button appearance="primary" arrow="down">
        Button primary
      </Button>
      <Ptag size="S">Маленький</Ptag>
      <Ptag>Средний</Ptag>
      <Ptag size="L">Большоай</Ptag>
      <Tag>Size S</Tag>
      <Tag size="M">Size M</Tag>
      <Tag color="green">Size S green</Tag>
      <Tag size="M" color="red">
        Size M red
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
