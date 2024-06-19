import { View } from "react-native"
import { grid } from "./gridStyle"

export const Col = ({ numRows, children }) => {
    return (
        <View style={grid[`${numRows}col`]}>{children}</View>
    )
}

export const Row = ({ children }) => (
    <View style={grid.row}>{children}</View>
)