import { JailbrakeRootDetection } from 'jailbrake-root-detection';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    JailbrakeRootDetection.echo({ value: inputValue })
}
