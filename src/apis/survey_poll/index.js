import NetWork from '../network';

class PollAPI extends NetWork {
  static instance = null;

  constructor(obj) {
    super(obj);
  }

  async getCurrentPoll(options) {
    return await NetWork.handleResponse(
      this.instance.get('/doSurvey', { ...options })
    );
  }

  async getLatestPolls(options) {
    return await NetWork.handleResponse(
      this.instance.get('/list', { ...options })
    );
  }

  async getPopularPolls(options) {
    return await NetWork.handleResponse(
      this.instance.get('/popular', { ...options })
    );
  }
}

export default function getPollNetwork() {
  if (PollAPI.instance !== null) {
    return PollAPI.instance;
  }

  return (PollAPI.instance = new PollAPI({
    url: '/cvms/marketbuzz-survey-service/survey/'
  }));
}
