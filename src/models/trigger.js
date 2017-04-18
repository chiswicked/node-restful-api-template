class Trigger {

  constructor(rule, evaluator) {
    this.rule = rule;
    this.evaluator = evaluator;
  }

  get triggered() {
    return this.evaluator.evaluate(this.rule.property, this.rule.operator, this.rule.value);
  }
}

module.exports.Trigger = Trigger;
