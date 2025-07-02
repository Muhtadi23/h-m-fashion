import CategoryBanner from "@/components/ui/CategoryBanner/CategoryBanner";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Slider from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="" >

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
          <ProductCard image={"/productWoman4.webp"} image2={"/productWoman44.webp"}/>
          <ProductCard image={"/productWoman1.webp"} image2={"/productWoman11.webp"}/>
          <ProductCard image={"/productWoman2.webp"} image2={"/productWoman22.webp"} />
          <ProductCard image={"/productWoman3.webp"}image2={"/productWoman33.webp"} />
        </div>

      </div>
      {/* <CategoryBanner imageSrc={"/kids.webp"}/> */}
    </div>
  );
}
