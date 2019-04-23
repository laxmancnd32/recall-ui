export function select(state) {
    const { pageName = 'Recall' } = state.homePageReducer;
    const { actionCalled = false } = state.homePageReducer;
    return Object.assign({}, {
        pageName,
        actionCalled
    });
}