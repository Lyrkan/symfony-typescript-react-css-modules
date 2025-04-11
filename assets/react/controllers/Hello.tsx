import React from "react";

import * as styles from "../../styles/Hello.scss?module";

export default function (props: { fullName: string }) {
    return <div className={styles.hello}>Hello {props.fullName}</div>;
}
