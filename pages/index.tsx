import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Tag, Button, P, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h2">Title</Htag>
      <Button appearance="primary">Button 1</Button>
      <Button appearance="ghost">Button 2</Button>
      <Button appearance="primary" arrow="right">Button arrow</Button>
      <Button appearance="ghost" arrow="down">Button arrow down</Button>
      <P size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit debitis nam aut, animi quas nemo nisi nostrum amet id ipsam facilis eveniet blanditiis aliquam magni natus vel deserunt libero?</P>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit debitis nam aut, animi quas nemo nisi nostrum amet id ipsam facilis eveniet blanditiis aliquam magni natus vel deserunt libero?</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit debitis nam aut, animi quas nemo nisi nostrum amet id ipsam facilis eveniet blanditiis aliquam magni natus vel deserunt libero?</P>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="m" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number
}