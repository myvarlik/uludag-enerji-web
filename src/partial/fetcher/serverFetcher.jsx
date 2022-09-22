import { connect } from "trim-redux";

export const serverFetcher = function (TheComponent, stateName) {
    let Fecher = function (props) {
        const mstp = (state) => ({
            [stateName]: state[stateName]
        });
        TheComponent = connect(mstp)(TheComponent);
        return <TheComponent {...props} />;
    }

    return connect((s) => ({ [stateName]: s[stateName] }))(Fecher);
}