export default function Parnes(props: {
  title: string;
  name: string;
  text: string;
}) {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.name}</p>
      <p>{props.text}</p>
    </>
  );
}
