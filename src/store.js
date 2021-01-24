import { reactive } from 'vue'

const store = {
    debug: true,

    state: reactive({
        searchPattern: '',
        code: '',
        exampleCode: `from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB

with Diagram("Web Service", show=False):
    ELB("lb") >> EC2("web") >> RDS("userdb")`
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