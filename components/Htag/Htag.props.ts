import { ReactNode } from 'react';

export interface HtagProps {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode //если внутрь тега передаем значение children, то в этом компоненте можем получить его из зарегервированного свойства children
}


