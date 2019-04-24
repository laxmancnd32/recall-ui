export function select(state) {
    const { pageName = 'Recall' } = state.dashboardReducer;
    const { actionCalled = false } = state.dashboardReducer;
    return Object.assign({}, {
        pageName,
        actionCalled
    });
}