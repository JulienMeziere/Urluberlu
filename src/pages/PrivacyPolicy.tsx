import privacyPolicyHtml from "../assets/privacy-policy.html?raw";

export function PrivacyPolicy() {
  return (
    <div className="w-full h-screen">
      <iframe
        srcDoc={privacyPolicyHtml}
        className="w-full h-full border-none"
        title="Privacy Policy"
      />
    </div>
  );
}
