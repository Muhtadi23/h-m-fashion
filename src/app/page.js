import CategoryBanner from "@/components/ui/CategoryBanner/CategoryBanner";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Slider from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-4" >
        <CategoryBanner imageSrc={"/women_sBanner.webp"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
          <ProductCard image={"/productWoman4.webp"} image2={"/productWoman44.webp"} />
          <ProductCard image={"/productWoman1.webp"} image2={"/productWoman11.webp"} />
          <ProductCard image={"/productWoman2.webp"} image2={"/productWoman22.webp"} />
          <ProductCard image={"/productWoman3.webp"} image2={"/productWoman33.webp"} />
        </div>
      </div>
      <div className="mt-4" >
        <CategoryBanner imageSrc={"/Men_s-Regular-T.webp"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
          <ProductCard image={"/img1r.png"} />
          <ProductCard image={"/img2.jpg"} />
          <ProductCard image={"/img3.jpg"} />
          <ProductCard image={"/img4.jpg"} />
        </div>
      </div>
      <div className="mt-4" >
        <CategoryBanner imageSrc={"/kids.webp"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
          <ProductCard image={"/kids1.webp"} />
          <ProductCard image={"/kids2.webp"} />
          <ProductCard image={"/kids3.webp"} />
          <ProductCard image={"/kids4.webp"} />
        </div>
      </div>

    </div>
  );
}
