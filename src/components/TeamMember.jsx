function TeamMember({ member }) {
  const { name, education, role, imageUrl, skills, socialHandles } = member;
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{education}</p>
        <p className="mt-2 text-sm text-gray-500">{role}</p>
        <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <ul className="mt-4 flex space-x-2">
          {socialHandles.map((social) => (
            <li key={social.name}>
              <a
                className="text-gray-500 hover:text-gray-600"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamMember;
