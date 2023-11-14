import { ApiUrls } from "../types/constants";
import { Person } from "../types/types";

export const fetchPeople = async (): Promise<Person[]> => {
  try {
    const response = await fetch(ApiUrls.PEOPLE);
    if (!response.ok) {
      throw new Error("Response is not ok.");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error while fetching people", error.message);
    throw error;
  }
};
