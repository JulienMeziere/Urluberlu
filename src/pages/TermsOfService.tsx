import termsOfServiceHtml from "../assets/terms-of-service.html?raw";

export function TermsOfService() {
  return (
    <div className="w-full h-screen p-8">
      <iframe
        srcDoc={termsOfServiceHtml}
        className="w-full h-full border-none"
        title="Terms of Service"
      />
    </div>
  );
}
