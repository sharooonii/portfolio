import { ContainerTextFlip } from "../AceternityUI/ContainerTextFlip";

export const HomeHero = () => {
  return (
    <div className="container mx-auto py-26">
      <h1 className="top-title py-6">
        <ContainerTextFlip
          words={["Hello, visitors", "I am Designer", "Also Programmer", "I make AI products"]}
        />
      </h1>
      <div className="text-xl pt-2">
        <div>Hello, I am Sharon Wong.</div>
        <div>UI UX Designer | Frontend Developer | Deloitte AI Institute | Hong Kong</div>
      </div>
    </div>
  );
};
