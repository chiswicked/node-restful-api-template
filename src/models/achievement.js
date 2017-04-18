class Achievement {
  constructor(signifier, completionLogics, rewards) {
    if (completionLogics.constructor !== Array || rewards.constructor !== Array) {
      throw new Error('Invalid arguments');
    }

    this.signifier = signifier;
    this.completionLogics = completionLogics;
    this.rewards = rewards;
  }

  get unlocked() {
    return this.unlocked;
  }
}

module.exports.Achievement = Achievement;
