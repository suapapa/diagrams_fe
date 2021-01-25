import { reactive } from 'vue'

const store = {
    debug: true,

    state: reactive({
        searchPattern: '',
        code: '',
        exampleCode: `from diagrams import Diagram, Cluster
from diagrams.programming.framework import Vue
from diagrams.programming.language import Python, Go

with Diagram("Diagrams Sandbox", show=False):
  with Cluster("sandbox"):
    diagrams = Python("diagrams")
  Vue("frontend") >> Go("backend") >> diagrams`
    }),

    setCode(newValue) {
        if (this.debug) {
            console.log('setMessageAction triggered with', newValue)
        }

        this.state.code = newValue
    },

    setSearchPattern(newValue) {
        if (this.debug) {
            console.log('setSearchPattern triggered with', newValue)
        }

        this.state.searchPattern = newValue
    }
}

export default store