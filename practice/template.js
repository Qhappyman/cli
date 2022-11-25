declare module '@reduck/core' {
    interface ModelsContext {
        {{modelName}}: '{{modelType}}';
    }
}
const {{modelType}} = createModel<IModel>('{{modelName}}').define({
    state: {
    },
    actions: {
        updateState(state: IModel, payload: Partial<IModel>) {
            return {
                ...state,
                ...payload
            };
        },
        updateKeyState(
            state: IModel,
            payload: Partial<ITabModel[keyof ITabModel]>,
            meta: keyof ITabModel
        ) {
            return {
                ...state,
                [meta]: {
                    ...state[meta],
                    ...payload
                }
            };
        },
    },
    effects: (context, { models }) => ({
    })
});
export default {{modelType}};