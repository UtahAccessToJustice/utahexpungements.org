import DistrictCourtList from "./DistrictCourtList";
import JusticeCourtList from "./JusticeCourtList";

export { DistrictCourtList, JusticeCourtList };

export const petitionerRepresentativeOptions = [
  { label: "Yes. I am the petitioner.", value: "petitioner" },
  {
    label: "No. I am an attorney representing the petitioner.",
    value: "attorney"
  }
];

export const countyOptions = [
  { label: "Beaver", value: "Beaver" },
  { label: "Box Elder", value: "Box Elder" },
  { label: "Cache", value: "Cache" },
  { label: "Carbon", value: "Carbon" },
  { label: "Daggett", value: "Daggett" },
  { label: "Davis", value: "Davis" },
  { label: "Duchesne", value: "Duchesne" },
  { label: "Emery", value: "Emery" },
  { label: "Garfield", value: "Garfield" },
  { label: "Grand", value: "Grand" },
  { label: "Iron", value: "Iron" },
  { label: "Juab", value: "Juab" },
  { label: "Kane", value: "Kane" },
  { label: "Millard", value: "Millard" },
  { label: "Morgan", value: "Morgan" },
  { label: "Piute", value: "Piute" },
  { label: "Rich", value: "Rich" },
  { label: "Salt Lake", value: "Salt Lake" },
  { label: "San Juan", value: "San Juan" },
  { label: "Sanpete", value: "Sanpete" },
  { label: "Sevier", value: "Sevier" },
  { label: "Summit", value: "Summit" },
  { label: "Tooele", value: "Tooele" },
  { label: "Uintah", value: "Uintah" },
  { label: "Utah", value: "Utah" },
  { label: "Wasatch", value: "Wasatch" },
  { label: "Washington", value: "Washington" },
  { label: "Wayne", value: "Wayne" },
  { label: "Weber", value: "Weber" }
];

export const courtTypeOptions = [
  { label: "District Court", value: "District" },
  { label: "Justice Court", value: "Justice" }
];

export function getJudicialDistrict(courtAddress, courtType) {
  var judicialDistrict, county;
  if (courtAddress) {
    if (courtType === "District") {
      DistrictCourtList.map(court => {
        court.options.filter(address => {
          if (address.value == courtAddress) {
            county = court.name.replace(" County", "");
            judicialDistrict = getJudicialDistrictFromCounty(
              court.name.replace(" County", "")
            );
          }
        });
      });
    }
    if (courtType === "Justice") {
      JusticeCourtList.map(court => {
        court.options.filter(address => {
          if (address.value == courtAddress) {
            county = court.name.replace(" County", "");
            judicialDistrict = getJudicialDistrictFromCounty(
              court.name.replace(" County", "")
            );
          }
        });
      });
    }
    return { judicialDistrict, county };
  }
}

function getJudicialDistrictFromCounty(value) {
  switch (value) {
    case "Box Elder":
    case "Rich":
    case "Cache":
      return "First";
      break;
    case "Davis":
    case "Morgan":
    case "Weber":
      return "Second";
      break;
    case "Salt Lake":
    case "Summit":
    case "Tooele":
      return "Third";
      break;
    case "Juab":
    case "Millard":
    case "Utah":
    case "Wasatch":
      return "Fourth";
      break;
    case "Beaver":
    case "Iron":
    case "Washington":
      return "Fifth";
      break;
    case "Garfield":
    case "Kane":
    case "Piute":
    case "Sanpete":
    case "Sevier":
    case "Wayne":
      return "Sixth";
      break;
    case "Carbon":
    case "Emery":
    case "Grand":
    case "San Juan":
      return "Seventh";
      break;
    case "Daggett":
    case "Duchesne":
    case "Uintah":
      return "Eighth";
      break;
  }
}
