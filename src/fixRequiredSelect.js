import React, { Component } from "react";


class FixRequiredSelect extends Component {

    state = {
        value: this.props.value || ""
    }

    onChange = (value) => {
        this.setState({ value });
    }

    render() {

        const { SelectComponent, required, ...props } = this.props;
        const { isDisabled } = this.props;
        const enableRequired = !isDisabled;

        return(
            <div>
                <SelectComponent 
                    {...props}
                />
                {
                    enableRequired && (
                        <input 
                        style={{
                            opacity: 0,
                            width: "100%",
                            height: 0,
                            position: "absolute"
                          }}
                        required={required}
                        />
                    )

                }

            </div>
        );
    }

}

export default FixRequiredSelect;

