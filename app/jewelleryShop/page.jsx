import FooterSection from '@/component/footer/FooterSection';
import HeaderSection from '@/component/header/HeaderSection';
import JewelleryShopMain from '@/component/main/JewelleryShopMain';

import {
  ornamentList as rawOrnamentsData,
  testimonialSliderList as rawTestimonialData,
  jewelleryGallery as rawJewelleryGallery,
  blogList as rawBlogData
} from '@/data/Data';


export const metadata = {
  title: 'Verda - Jewellery Shop',
  description: 'Developed By Raven Rock Technology',
};

export default async function JewelleryShopPage() {

  return (
    <div className="fz-1-body">
      <HeaderSection />
      <JewelleryShopMain
        ornamentsData={rawOrnamentsData}
        testimonialStaticData={rawTestimonialData}
        jewelleryGalleryStaticData={rawJewelleryGallery}
        blogStaticData={rawBlogData}
      />
      <FooterSection />
    </div>
  );
}
