import packageJSON from '../../package.json';

export function Footer() {
  const { name, version, author, repository } = packageJSON;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-4">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-500">
        <a
          href={`${repository.url}/blob/main/LICENSE`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors"
        >
          MIT LICENSE
        </a>

        <div className="flex items-center gap-1">
          <span>{name} © {currentYear} By</span>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            {author.name}
          </a>
          {/* Plain text: the repo has no releases, so any release link would 404 */}
          <span className="ml-1">v{version}</span>
        </div>
      </div>
    </footer>
  );
}
