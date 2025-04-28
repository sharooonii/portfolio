import { ContainerTextFlip } from "../AceternityUI/ContainerTextFlip";

export const HomeHero = () => {
  return (
    <div className="container mx-auto py-26">
      <h1 className="top-title flex gap-4 *:inline py-6">
        <p>I can</p> 
        <ContainerTextFlip
          words={["code", "design"]}
        />
      </h1>
      <div className="text-xl pt-2">
        <div>Hello, I am Sharon Wong.</div>
        <div>UI UX Designer | Frontend Developer | Based in Hong Kong</div>
      </div>
    </div>
  );
};
