import Link from "next/link";

export default function Home() {
  return (
    <div className="min-vh-100  d-flex flex-column align-items-center justify-content-center bg-success-subtle">
      <div className=" p-5 bg-light w-75 rounded-4 shadow-lg">
        <h1 className="fs-6 p-3 fw-bolder bg-primary rounded-3 text-center text-bg-primary">
          URL-SHORTNER
        </h1>
        <form>
          <input
            type="text"
            placeholder="Enter a Url"
            name="originalUrl"
            className="form-control border border-2 border-primary"
          />
          <button className="btn btn-success">Shorten</button>
        </form>
      </div>
      <div className="mt-4 text-center">
        <Link href="/urls">
          <span className="btn btn-danger w-100">View All Shortend URLS</span>
        </Link>
      </div>
    </div>
  );
}
