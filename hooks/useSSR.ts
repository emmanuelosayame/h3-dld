export const useSSR = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
};

export const useSession: () => AuthState = () => {
  const { data, isLoading, error } = useSwrOg(
    ['session.user'],
    async (path) => await client.session.user.query(),
    { revalidateOnFocus: false }
  );
  return [data, isLoading, error];
};
