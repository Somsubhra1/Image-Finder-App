import React from "react";
import { AppBar } from "material-ui";
import { ActionSearch } from "material-ui/svg-icons";

export default function NavBar() {
    return (
        <div>
            <AppBar
                showMenuIconButton={false}
                title={
                    <strong style={{ cursor: "default" }}>
                        {" "}
                        <ActionSearch color="white" /> Image Finder App{" "}
                    </strong>
                }
            />
        </div>
    );
}
