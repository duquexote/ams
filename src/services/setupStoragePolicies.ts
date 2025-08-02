import { supabase } from './supabase';

/**
 * Configura políticas de armazenamento para os buckets do Supabase
 * Esta função deve ser executada uma vez para configurar corretamente as permissões
 */
export async function setupStoragePolicies() {
  try {
    console.log('Iniciando configuração de políticas de armazenamento...');
    
    // Lista de buckets que precisamos configurar
    const buckets = ['articles', 'team'];
    
    for (const bucketName of buckets) {
      // Verificar se o bucket existe
      const { data: bucketList, error: listError } = await supabase.storage.listBuckets();
      
      if (listError) {
        console.error(`Erro ao listar buckets: ${listError.message}`);
        continue;
      }
      
      // Verificar se o bucket já existe
      const bucketExists = bucketList.some(bucket => bucket.name === bucketName);
      
      if (!bucketExists) {
        // Criar o bucket se não existir
        const { error: createError } = await supabase.storage.createBucket(bucketName, {
          public: true // Tornar o bucket público para acesso às imagens
        });
        
        if (createError) {
          console.error(`Erro ao criar bucket ${bucketName}: ${createError.message}`);
          continue;
        }
        
        console.log(`Bucket ${bucketName} criado com sucesso`);
      }
      
      // Configurar políticas para o bucket
      // 1. Política para permitir leitura pública (SELECT)
      const { error: readPolicyError } = await supabase.rpc('create_storage_policy', {
        bucket_id: bucketName,
        policy_name: `${bucketName}_read_policy`,
        definition: 'true', // Permite acesso de leitura para todos
        operation: 'SELECT'
      });
      
      if (readPolicyError) {
        console.error(`Erro ao criar política de leitura para ${bucketName}: ${readPolicyError.message}`);
      } else {
        console.log(`Política de leitura para ${bucketName} configurada com sucesso`);
      }
      
      // 2. Política para permitir inserção (INSERT)
      const { error: insertPolicyError } = await supabase.rpc('create_storage_policy', {
        bucket_id: bucketName,
        policy_name: `${bucketName}_insert_policy`,
        definition: 'true', // Permite inserção para todos (você pode restringir isso se necessário)
        operation: 'INSERT'
      });
      
      if (insertPolicyError) {
        console.error(`Erro ao criar política de inserção para ${bucketName}: ${insertPolicyError.message}`);
      } else {
        console.log(`Política de inserção para ${bucketName} configurada com sucesso`);
      }
      
      // 3. Política para permitir atualização (UPDATE)
      const { error: updatePolicyError } = await supabase.rpc('create_storage_policy', {
        bucket_id: bucketName,
        policy_name: `${bucketName}_update_policy`,
        definition: 'true', // Permite atualização para todos (você pode restringir isso se necessário)
        operation: 'UPDATE'
      });
      
      if (updatePolicyError) {
        console.error(`Erro ao criar política de atualização para ${bucketName}: ${updatePolicyError.message}`);
      } else {
        console.log(`Política de atualização para ${bucketName} configurada com sucesso`);
      }
    }
    
    console.log('Configuração de políticas de armazenamento concluída!');
    return true;
  } catch (error) {
    console.error('Erro ao configurar políticas de armazenamento:', error);
    return false;
  }
}
