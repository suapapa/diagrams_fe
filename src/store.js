import { reactive } from 'vue'

const store = {
    debug: true,

    state: reactive({
        diagram: '',
        searchPattern: '',
    }),

    setDiagram(newValue) {
        if (this.debug) {
            console.log('setMessageAction triggered with', newValue)
        }

        this.state.diagram = newValue
    },

    setSearchPattern(newValue) {
        if (this.debug) {
            console.log('setSearchPattern triggered with', newValue)
        }

        this.state.searchPattern = newValue
    }
}

export default store