import Navbar from "./navbar";
import Back from "./Back";
import SearchCard from "./Searchcard";
import "./SearchPage.css";
export default function SearchPage() {
  //   const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Back />

      <div className="Results-div">
        <div className="search-Heading">Showing Results for Bilal</div>
        <div className="search-cards-div">
          <SearchCard
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
          />
        </div>
      </div>
    </>
  );
}
