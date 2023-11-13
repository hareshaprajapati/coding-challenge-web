import { PEOPLE_URL } from "../types/constants";

export const fetchPeople = async () => {
  try {
    const response = await fetch(PEOPLE_URL);
    if (!response.ok) {
      throw new Error("Response is not ok.");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error while fetching people", error.message);
    throw error;
  }
};
