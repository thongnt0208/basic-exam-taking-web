import { DOMAIN_LOCAL } from "../../const/domain";
import axios from "axios";

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
  return axios
    .get(`${DOMAIN_LOCAL}/quizz/${id}`)
    .then((response) => {
      if (response.status !== 200) {
        console.log("Failed to fetch quiz");
        throw new Error(response.statusText);
      }
      console.log("GetQuizzById", response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

/**
 * Sends an answer to the server and retrieves the score.

 * @description This function sends the user's answer for a specific question to the server, and then retrieves the score or response data. It uses Axios to make a POST request to the server endpoint specified by the 'DOMAIN_LOCAL' constant.
 *
 * @param {String} questionId - The ID of the question to answer.
 * @param {Array: [{
      quesId: questionId,
      answerId: answerId,
    }]} answerString - The answer to submit for each question.
 *
 * @returns {Promise} A promise that resolves with the server's response data.
 *
 * @example
 * SubmitAnswer(123, [{
      quesId: "questionId",
      answerId: "answerId",
    }])
 *   .then((response) => {
 *     console.log("Score:", response.data);
 *   })
 *   .catch((error) => {
 *     console.error("Failed to submit answer:", error);
 *   });
 *
 * @version 1.0.0
 * @author ThongNT
 */
function SubmitAnswer(questionId, answerString) {
  return axios
    .post(`${DOMAIN_LOCAL}/answer/${questionId}`, answerString)
    .then((response) => {
      if (response.status !== 200) {
        console.log("Failed to fetch answer");
        throw new Error(response.statusText);
      }
      console.log("SubmitAnswer", response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export { GetQuizzById, SubmitAnswer };
