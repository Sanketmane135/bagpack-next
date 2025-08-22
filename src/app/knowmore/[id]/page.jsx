"use client";
import { usePathname } from "next/navigation";
import Footer from "../../../app/components/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Knowmore() {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const storedEmail = typeof window !== "undefined" ? window.localStorage.getItem("mailsign") : "";
  const router = useRouter();

  const [packages, setPackages] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!currentId) return;

    const fetchPackage = async () => {
      try {
        const res = await axios.get(
          `https://bagpackbackendweb.onrender.com/api/bagpack/builtpackages/${currentId}`
        );

        if (!res.data.tripPack) {
          setNotFound(true);
        } else {
          setPackages(res.data.tripPack);
          setNotFound(false);
        }
      } catch (err) {
        console.error("Error fetching package:", err);
        setNotFound(true);
      }
    };

    fetchPackage(); 
  }, [currentId]);

  const handleClick = () => {
    if (storedEmail && storedEmail.length > 5) {
      router.push(`/knowmore/${currentId}/tripbook`);
    } else {
      alert("You don't have logined. Please log in first");
      router.push("/login");
    }
  };

  return (
    <div className="knowmore-main">
      {notFound ? (
        <div className="know-loading-div">
          <p className="know-loading-div-text">There is no such trip that are tryring to access</p>
        </div>
      ) : packages ? (
        <>
          <img src={packages.imageurl} className="know-img-first" alt={packages.tripName} />
          <h4 className="place-name">{packages.tripName}</h4>

          <div className="knowmore-price-div">
            <div className="knowmore-inner">
              <div className="knowmore-price-div-left">
                <h5 className="price-h5">{packages.pricePerPerson} </h5>
                <p className="per-person-p">per person</p>
                <p className="days-p">{packages.durationDays} Days</p>

                <div className="rating-and-review">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#f9cb24"
                  >
                    <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                  <p>4.6 Ratings</p>
                </div>
              </div>

              <div className="knowmore-price-div-right">
                <button className="know-btn" onClick={handleClick}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="knowmore-details-div">
            <div className="knowmore-details-div-left">
              <div className="about-this-package">
                <div className="about-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#EA3323"
                  >
                    <path d="M252-306.67q51.38 0 100.02 11.84Q400.67-283 448-259.33v-416q-43.67-28-94.08-43t-101.92-15q-37.33 0-73.5 8.66Q142.33-716 106.67-702v421.33Q139-294 176.83-300.33q37.84-6.34 75.17-6.34Zm262.67 47.34q48-23.67 94.83-35.5 46.83-11.84 98.5-11.84 37.33 0 75.83 6t69.5 16.67v-418q-33.66-16-70.71-23.67-37.05-7.66-74.62-7.66-51.67 0-100.67 15t-92.66 43v416ZM481.33-160q-50-38-108.66-58.67Q314-239.33 252-239.33q-38.36 0-75.35 9.66-36.98 9.67-72.65 25-22.4 11-43.2-2.33Q40-220.33 40-245.33v-469.34q0-13.66 6.5-25.33Q53-751.67 66-758q43.33-21.33 90.26-31.67Q203.19-800 252-800q61.33 0 119.5 16.33 58.17 16.34 109.83 49.67 51-33.33 108.5-49.67Q647.33-800 708-800q48.58 0 95.29 10.33Q850-779.33 893.33-758q13 6.33 19.84 18 6.83 11.67 6.83 25.33v469.34q0 26.26-21.5 39.96t-43.17.7q-35-16-71.98-25.33-36.99-9.33-75.35-9.33-62 0-119.33 21-57.34 21-107.34 58.33Zm-204-330.67Z" />
                  </svg>
                  <h6>About this package</h6>
                </div>
                <p>{packages.description}</p>
              </div>

              <div className="know-combine">
                <div className="highlight">
                  <h6 className="about-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#EA33F7"
                    >
                      <path d="M480-320q48 0 85.5-28.5T620-422H340q17 45 54.5 73.5T480-320ZM380-480q25 0 42.5-17.5T440-540q0-25-17.5-42.5T380-600q-25 0-42.5 17.5T320-540q0 25 17.5 42.5T380-480Zm200 0q25 0 42.5-17.5T640-540q0-25-17.5-42.5T580-600q-25 0-42.5 17.5T520-540q0 25 17.5 42.5T580-480ZM306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                    </svg>{" "}
                    Highlights
                  </h6>
                  {packages.highlights?.map((v, i) => (
                    <div className="highlights-inner" key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#8C1AF6"
                      >
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
                      </svg>
                      <p>{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="itineray-div">
                <div className="itineray-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#F19E39"
                  >
                    <path d="M180-140h600v-269H180v269Zm660 60H120v-720h150v60h-90v271h600v-271h-90v-60h150v720ZM480-469Zm0 60v-60 60Zm0 0Zm-30-251v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Z" />
                  </svg>
                  <h5>Itinerary</h5>
                </div>
                {packages.itinerary?.map((v, i) => (
                  <div className="itineray-div-inner" key={i}>
                    <div>
                      <div className="about-flex">
                        <div className="itineray-count">{i + 1}</div>
                        <h6 className="itineray-title">{v.title}</h6>
                      </div>
                      <p className="itineray-p">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="knowmore-booking-div">
            <div className="booking-div-inner">
              <h5>Are You Ready For It...?</h5>
              <p>Book Your Majestic Trip Today & Create Memories That Will Last a Lifetime</p>
            </div>
          </div>
          <button className="know-btn" onClick={handleClick}>
            Book Now
          </button>

          <Footer />
        </>
      ) : (
        <div className="know-loading-div">
          <p className="know-loading-div-text">Loading package...</p>
        </div>
      )}
    </div>
  );
}
