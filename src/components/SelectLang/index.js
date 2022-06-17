import React, {Component} from "react";
import { withTranslation } from "react-i18next";
import { Select, FormControl, Box, InputLabel, MenuItem} from "@material-ui/core";
import i18n from "~/i18n";


class SelectLang extends Component {
    state = {
        lang: "EN",
    }

    onChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    render() {
        return (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">EN</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.lang}
                  label="EN"
                  onChange={this.onChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
        );
    }
}


export default withTranslation(SelectLang);

