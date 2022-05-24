import Navbar from "./navbar";
import Back from "./Back";
import SearchCard from "./Searchcard";
import "./SearchPage.css";
import React from "react"
export default function SearchPage() {

  const [data, setData] = React.useState([]);

  
 
 // console.log(data.);
  //   const navigate = useNavigate();

  //fetching json object
  React.useEffect(() =>  {
    fetch( "http://localhost/search.php")
      .then(res => res.json())
      .then(json => {
        setData(json);
       
      });
  }, []);

  console.log(data['data'][1]['id']);

//   async React.componentDidMount() {
//     try {
//       const response = await fetch(`http://localhost/search.php`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//     } catch (error) {
//       console.log(error);
//     }
// }

  


  



  return (
    <>
      <Navbar />
      <Back />

      <div className="Results-div">
        <div className="search-Heading">Showing Results for Bilal</div>
        <div className="search-cards-div">
          {
            
          }
          {/* <SearchCard
            name="bilal"
            id="123"
            dob="12-10-200"
            visit="12-10-2000"
          />
          <SearchCard
            name="bilal"
            id="123"
            dob="12-10-200"
            visit="12-10-2000"
          /> */}
        </div>
      </div>
    </>
  );
}
