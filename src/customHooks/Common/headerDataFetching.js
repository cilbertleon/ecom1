import { useEffect, useState } from "react";
import { storeCategories, storeMainMenu } from "../../redux-store/Common/headerSlice";
import { useDispatch } from "react-redux";
import { getData } from "../../Utilities/apiBase";

const useHeaderDataFetch = () => {

 const dispatch= useDispatch();
 const [isLoading,setIsloading] = useState(false);
 const [isErrorMessage,setIsErrorMessage] = useState(false);


  const getCategorydataAndMainMenuData = async () => {
   try{
    setIsloading(true);
    let apisToTrigger = [
      "categories",
      "main_menu_nav_items",
    ];
    let getBothDataFromApi = await getData(apisToTrigger);
    // debugger
    let [category, menu] = getBothDataFromApi;
    dispatch(storeCategories(category));
    dispatch(storeMainMenu(menu));
    setIsloading(false);
   }catch(err){
     setIsErrorMessage(err)
   }
  };



  useEffect(() => {
    getCategorydataAndMainMenuData();
  }, []);




  return { isLoading , isErrorMessage};
};

export default useHeaderDataFetch;