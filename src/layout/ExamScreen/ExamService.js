import { DOMAIN_LOCAL } from "../../const/domain";
import axios from 'axios';

/**
 *  Retrieve a quiz object with a list of questions by its ID using a fetch request.
 *
 * @param {string} id - The ID of the quiz to retrieve.
 * @returns {Promise<Object>} A Promise that resolves to the quiz data in JSON format.
 *
 * @example
 * GetQuizzById(quizId)
 *   .then((quizData) => {
 *     console.log(quizData);
 *   })
 *   .catch((error) => {
 *     console.error(error);
 *   });
 *
 * @description This function retrieves a quiz object with a list of questions by its ID using a fetch request.
 * @version 1.0.0
 * @author ThongNT
 */
function GetQuizzById(id) {
    return axios.get(`${DOMAIN_LOCAL}/quizz/${id}`)
    .then((response) => {
      if (response.status !== 200) {
        console.log("Failed to fetch quiz");
        throw new Error(response.statusText);
      }
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export { GetQuizzById };
