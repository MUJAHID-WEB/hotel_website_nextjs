import Image from "next/image";
import React from "react";

function KitchenBanner() {
  return (
    <div className="relative w-full h-[503px] md:h-[447px] xl:h-[577px] my-[100px]">
      <Image
        src="/kitchenbnr.png"
        alt="image loading"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default KitchenBanner;
