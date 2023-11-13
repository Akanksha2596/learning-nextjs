import Image from "next/image";
// import img from "../public/1.jpg";
export default function PetsPage() {
  return (
    <>
      {/* <div>
        static path for placeholder : blur
        <Image
          src={img}
          placeholder="blur"
          alt="pet"
          width="200"
          height="450"
          blurDataURL="img-pointing-placeholder"
        />
      </div> */}
      {["1", "2", "3"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pets" width="200" height="420" />
          </div>
        );
      })}
    </>
  );
}
