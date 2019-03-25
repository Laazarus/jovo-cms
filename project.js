// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  alexaSkill: {
    nlu: "alexa"
  },
  googleAction: {
    nlu: "dialogflow"
  },
  defaultStage: "local",
  satges: {
    local: {
      endpoint: `${JOVO_WEBHOOK_URL}`,
      alexaSkill: {
        skillId: "${LOCAL_SKILL_ID}"
      }
    },
    dev: {
      endpoint: "<your-lambda-dev-arn>"
    }
  }
};
