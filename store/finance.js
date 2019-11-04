export const state = () => ({
  cards: [
    {
      name: 'Моя карта',
      isConfirmed: true,
      number: '4000-0000-0000-0002'
    },
    {
      name: 'Ещё карта',
      isConfirmed: true,
      number: '4000-3333-0000-0002'
    },
    {
      name: 'Новая карточка',
      isConfirmed: true,
      number: '4000-2345-0000-0002'
    },
    {
      name: 'Новая карта',
      isConfirmed: true,
      number: '4000-2345-8888-0002'
    },
    {
      name: 'Последняя mock-карта',
      isConfirmed: true,
      number: '4000-1111-2222-0002'
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
