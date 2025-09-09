import FooterSection from '@/component/footer/FooterSection';
import CakeShopMain from '@/component/main/CakeShopMain';
import CakeHeaderWrapper from '@/component/wrapper/CakeHeaderWrapper';

import {
  allCakeList,
  thirdBannerData,
  cakeCategories,
  cakeSliderList,
  cakeClientSlider,
  blogList
} from '@/data/Data';


export const metadata = {
  title: 'Butter and Bloom',
  description: 'Developed By Raven Rock Technology',
};

export default async function CakeShopPage() {


  return (
    <>
      <CakeHeaderWrapper thirdBannerStaticData={thirdBannerData} />
      <CakeShopMain
        cakeStaticData={allCakeList}
        cakeCategoryStaticData={cakeCategories}
        cakeSliderStaticData={cakeSliderList}
        cakeClientSliderStaticData={cakeClientSlider}
        blogStaticData={blogList}
      />
      <FooterSection />
    </>
  );
}
