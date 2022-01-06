import { useState } from "react";
import { Htag, Tag, Button, P, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
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
    </div>
  );
}
