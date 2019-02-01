function postedBy(parent, args, context) {
  return context.primsa.link({ id: parent.id }).postedBy();
}

module.exports = {
  postedBy,
}
