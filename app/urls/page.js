export default async function fetchUrls() {
  let urls;
  try {
    urls = await fetchUrls();
  } catch (error) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="p-xl-5 bg-light w-50 shadow-lg rounded-3 mw-50">
          <h1 className="fs-lg fw-bolder text-center text-muted mb-5">Error</h1>
          <p className="fs-4 fw-bolder text-center text-danger">
            Failed to load the Urls
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div>hi</div>
    </div>
  );
}
