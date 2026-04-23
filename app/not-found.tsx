import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto items-center text-center p-8">
      <h1 className="text-4xl uppercase mb-5">404 Not found</h1>
      <p className="text-base font-medium mb-8">
        The page you are looking for does not exist or has been moved
      </p>
      <Link
        href="/"
        className="text-white text-2xl p-4 rounded-2xl bg-grey-green hover:text-main cursor-pointer "
      >
        Go back to home
      </Link>
    </div>
  );
}
