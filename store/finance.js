export const state = () => ({
  cards: [
    {
      name: 'Моя карта',
      isConfirmed: true,
      number: '4000-0000-0000-0002'
    }
  ]
})

export const mutations = {
  addCard(state, card) {
    state.cards = [...state.cards, card]
  },
  editCard(state, card) {
    const cardIndex = state.cards.findIndex(
      (item) => item.number === card.number
    )
    state.cards[cardIndex] = card
  },
  removeCard(state, card) {
    const cardIndex = state.cards.findIndex(
      (item) => item.number === card.number
    )
    state.cards.splice(cardIndex, 1)
  }
}

export const actions = {
  addCard(context, card) {
    context.commit('addCard', card)
  },
  editCard(context, card) {
    context.commit('editCard', card)
  },
  removeCard(context, card) {
    context.commit('removeCard', card)
  }
}

export const getters = {
  cards: (state) => state.cards
}
