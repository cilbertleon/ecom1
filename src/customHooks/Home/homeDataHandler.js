import { useEffect, useState } from "react";
import { storeBannerData, storeBestSellingData, storeFeaturedCategoryProductData } from "../../redux-store/Home/homeSlice";
import { useDispatch } from "react-redux";
import { getData } from "../../Utilities/apiBase";

const useHomeDataFetch = () => {

 const dispatch= useDispatch();
 const [isLoading,setIsloading] = useState(false);
 const [isErrorMessage,setIsErrorMessage] = useState(false);


//  useDispatch

  const getHomeData = async () => {
   try{
    setIsloading(true);
    let apisToTrigger = [
      "home_banner_content",
      "featured-products",
      "product_by_category"
    ];
    let getBothDataFromApi = await getData(apisToTrigger);
    let [banner,product,product_by_category] = getBothDataFromApi;
    dispatch(storeBestSellingData(product));
    dispatch(storeBannerData(banner));
    dispatch(storeFeaturedCategoryProductData(product_by_category));
    setIsloading(false);
   }catch(err){
     setIsErrorMessage(err)
   }
  };



  useEffect(() => {
    getHomeData();
  }, []);




  return { isLoading , isErrorMessage};
};

export default useHomeDataFetch;