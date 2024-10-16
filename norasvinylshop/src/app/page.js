import Image from "next/image";
import profilePic from "/Users/nora./Desktop/Development/generated Logo.png";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import products from "./products";

export default function Home() {
  return (
    <div
      className=" min-h-screen flex flex-col items-center p-10"
      style={{ backgroundColor: "#d4c39d" }}
    >
      <div className="grid grid-rows-[1px_1px_1fr] items-center justify-items-center min-h-screen p-10 pb-3 gap-9 sm:p-10">
        <h1
          className="text-5xl bevan-regular-italic"
          style={{ color: "#301f17" }}
        >
          <strong>Nora's Vinyls</strong>
        </h1>
        <h2
          className="text-decoration-line: overline "
          style={{ color: "#bd6f39" }}
        >
          Your Sound, Your Story
        </h2>

        <div className="rounded-full overflow-hidden w-25 h-25 mb-4 ">
          <Image src={profilePic} alt="Profile" width={300} height={300} />
        </div>
      </div>

      <div className="font-[family-name:var(--font-geist-sans)] text-slate-700 dark:text-brown-300 p-8 pb-20">
        <h1
          className="text-3xl text-center font-bold mb-4 "
          style={{ color: "#301f17" }}
        >
          Vinyls
        </h1>
        <div className="productItem flex flex-wrap justify-center gap-6">
          {/* <ProductItem product={products[0]} /> */}
          <ProductList />
        </div>
      </div>
    </div>
  );
}
